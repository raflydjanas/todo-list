document.querySelector('.add').onclick = function() {
    if( document.querySelector('.input').value.length === 0 ) {
            alert('Please Enter Yours New List')
    } 
    else {
        document.querySelector('.list').innerHTML += 
        `
            <div class="task">
                <span id="taskName">
                     ${document.querySelector('.new-task input').value}
                </span>
                <button class="delate">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </div>
        `;

        let delateTask = document.querySelectorAll('.delate')
            for( let i = 0; i < delateTask.length; i++ ) {
                delateTask[i].onclick = function() {
                    this.parentNode.remove();
                }
            }
         
        let task = document.querySelector('.task')
            for( let i = 0; i < task.length; i++ ) {
                task[i].onclick = function() {
                    this.classList.toggle('complate')
                }
            }

            document.querySelector('.new-task input').value = '';
    }
}