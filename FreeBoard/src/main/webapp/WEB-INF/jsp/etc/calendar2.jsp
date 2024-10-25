<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />
<script src='dist/index.global.js'></script>
<script>

  document.addEventListener('DOMContentLoaded', async function() {
    var calendarEl = document.getElementById('calendar');
	
    //Ajax 호출
    // new Promise()
    // 프라미스객체가 반환될 때 await 수행코드 -> 그 다음 코드 실행
    var eventData = [];
    
	let resolve = await fetch('eventList.do')
	let result = await resolve.json();	//.then(resolve => resolve.json())
	eventData = result;					// .then(result => {
	console.log(eventData);
										// 	evenData 값을 할당
										//eventData = result;
										//})
    									//.catch(err => console.log(err)); */
    
    // 값을 할당한 후에 실행
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialDate: '2024-10-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      select: function(arg) {
        var title = prompt('Event Title:');
        if (title) {
        	console.log(arg);
        	fetch('addEvent.do?title='+ title +'&start='+ arg.startStr +'&end='+ arg.endStr)
        	.then(resolve => resolve.json())
        	.then(result => {
        		console.log(result);
        		if(result.retCode == "OK"){
        			calendar.addEvent({
        				title: title,
        				start: arg.startStr,
        				end: arg.endStr,
        				allDay: arg.allDay
        			})
        		}else if(result.retCode == 'FAIL'){
        			aler('등록 에러')
        		}
        	})
        	.catch(err => console.log(err));
        }
        calendar.unselect()
      },
      eventClick: function(arg) {
    	  console.log(arg);
        if (confirm('Are you sure you want to delete this event?')) {
        	fetch('removeEvent.do?title='+ arg.event.title)
        	.then(resolve => resolve.json())
        	.then(result => {
        		
        	})
          arg.event.remove()
        }
      },
      eventDrop: function(info) {
    	  console.log(info);
    	    if (!confirm("Are you sure about this change?")) {
    	    	info.revert();    	    	
    	    }else{
    	    	fetch('modifyEvent.do?title='+ info.event.title +'&start='+ info.event.startStr +'&end='+ info.event.endStr)
    	    	.then(resolve => resolve.json())
    	    	.then(result => {
    	    		
    	    	})
    	    }
    	  },
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: eventData
 
    });						
    calendar.render();
    
	});
	
    

</script>
<style>
body {
	margin: 40px 10px;
	padding: 0;
	font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
	font-size: 14px;
}

#calendar {
	max-width: 1100px;
	margin: 0 auto;
}
</style>
</head>
<body>

	<div id='calendar'></div>

</body>
</html>