    
        function updateCurrentTime() {
            const currentTimeElement = document.getElementById('currentTime');
            const currentTime = new Date();
            const hours = currentTime.getHours().toString().padStart(2, '0');
            const minutes = currentTime.getMinutes().toString().padStart(2, '0');
            const seconds = currentTime.getSeconds().toString().padStart(2, '0');
            currentTimeElement.textContent = `Time: ${hours}:${minutes}:${seconds}`;
        }

      
        function addReminder() {
            const medicineName = document.getElementById('medicineName').value;
            const medicineNam = document.getElementById('medicineNam').value;
            const reminderTime = document.getElementById('reminderTime').value;

  
            const reminderItem = document.createElement('li');
            reminderItem.classList.add('reminder-item');


            reminderItem.innerHTML = `
                <div>Medicine-${medicineName} - ${reminderTime}</div>
                <div>Dosage-${medicineNam}</div>
                <button class="delete-btn" onclick="deleteReminder(this)">Delete</button>
            `;


            const remindersList = document.getElementById('reminders');
            remindersList.appendChild(reminderItem);

            setupAlarm(reminderTime);

      
            document.getElementById('medicineName').value = '';
            document.getElementById('medicineNam').value = '';
            document.getElementById('reminderTime').value = '';
        }


        function deleteReminder(buttonElement) {
            const reminderItem = buttonElement.parentElement;
            const remindersList = document.getElementById('reminders');
            remindersList.removeChild(reminderItem);
        }

     
        function setupAlarm(reminderTime) {
            const currentTime = new Date();
            const [hours, minutes] = reminderTime.split(':');
            const reminderDate = new Date();
            reminderDate.setHours(hours, minutes, 0, 0);

          
            const timeDifference = reminderDate.getTime() - currentTime.getTime();

           
            if (timeDifference > 0) {
                const alarmSound = new Audio('set remainders/mixkit-scanning-sci-fi-alarm-905.mp3'); 
                setTimeout(() => {
                    
                    alarmSound.play();
                    alert('Time to take your medicine!');
                }, timeDifference);
            }
            
        }

        // Update the current time every second
        setInterval(updateCurrentTime, 1000);

        // Update the current time immediately on page load
        updateCurrentTime();