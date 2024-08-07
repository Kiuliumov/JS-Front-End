function solve() {
   const restaurants = {};
   document.querySelector('#btnSend').addEventListener('click', onClick);
   function onClick(){
      const input = document.querySelector('textarea').value;
      const restaurantEntries = input.split('\n').filter(e => e.trim() !== '');
      
      for (const entry of restaurantEntries) {
         const [restaurantName, workerData] = entry.split('-');
         const workers = workerData.split(',');

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = [];
         }

         for (const worker of workers) {
            const [workerName, workerSalary] = worker.split(' ');
            restaurants[restaurantName].push({ name: workerName, salary: Number(workerSalary) });
         }
      }

      let bestRestaurantName = '';
      let bestAverageSalary = 0;

      for (const [restaurantName, workers] of Object.entries(restaurants)) {
         const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         if (averageSalary > bestAverageSalary) {
            bestAverageSalary = averageSalary;
            bestRestaurantName = restaurantName;
         }
      }

      const bestRestaurantWorkers = restaurants[bestRestaurantName];
      console.log(bestResturantWorkers);
      const highestSalary = 1300;
      
      bestRestaurantWorkers.sort((a, b) => b.salary - a.salary);

      console.log(`Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${highestSalary.toFixed(2)}`);
      bestRestaurantWorkers.forEach(worker => console.log(`Name: ${worker.name} With Salary: ${worker.salary}`));
   }  
}
