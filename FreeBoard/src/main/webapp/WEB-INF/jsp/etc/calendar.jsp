<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />
<script src='dist/index.global.js'></script>
<script>
  
  let modalArg = null;	// arg 공유할 목적
  let calendar = null;
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
   calendar = new FullCalendar.Calendar(calendarEl, {
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
      // var title = prompt('Event Title:');
        //if (title) {
    	  modalShow(arg);
        	console.log(arg);
    	  
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
	
	<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="modalClose()"></button>
      </div>
      <div class="modal-body">
        <!-- title, startStr, endStr -->
        타이틀: <input type="text" id="title"><br>
        시작일시: <input type="date" id="start" onchange="startChange(event)"><br>
        종료일시: <input type="date" id="end" onchange="endChange(event)"><br>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="modalClose()">Close</button>
        <button type="button" class="btn btn-primary" onclick="modalSave()">Save changes</button>
      </div>
    </div>
  </div>
</div>
	<script src="js/calendarModal.js"></script>
</body>
</html>