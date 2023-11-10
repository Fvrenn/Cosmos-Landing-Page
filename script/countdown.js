   // Set the date we're counting up from
   const startDate = new Date();
   startDate.setFullYear(startDate.getFullYear() - 1); // Subtract 1 year
   startDate.setHours(startDate.getHours() - 5); // Subtract 5 hours
   startDate.setMinutes(startDate.getMinutes() - 49); // Subtract 49 minutes
   startDate.setSeconds(startDate.getSeconds() - 20); // Subtract 20 seconds

   function updateCountUp() {
       const currentDate = new Date();
       const timeDifference = currentDate - startDate;

       const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
       const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

       const countUpElement = document.getElementById('countup');
       countUpElement.textContent = `${days}D ${hours}H ${minutes}M ${seconds}S`;
   }

   // Update the count every second
   setInterval(updateCountUp, 1000);

   // Initial update
   updateCountUp();