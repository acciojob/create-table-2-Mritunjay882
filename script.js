function createTable() {
    //Write your code here
   const table = document.getElementById('myTable');
  const rowss = prompt('Input number of rows');
  const col = prompt('Input number of columns');

	// traversing to givem value of rows
  for (let i = 0; i < rowss; i++)
	  {
    const row = table.insertRow(i); // insert row will insert tr 
		  //trvs to column
    for (let j = 0; j < col; j++)
			{
	      const column = row.insertCell(j); // insert value in col
				
	      column.innerText = `Row-${i} Column-${j}`;
		    }
		}
}
