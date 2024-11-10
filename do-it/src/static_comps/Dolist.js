import React,{useState} from 'react';


function Dolist(){
    const[tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    // functions wee will need 

    //input change

    function handleInputChange(event){
        setNewTask(event.target.value);

    };
    //addTask
    function addTask(){
        if(newTask.trim()===""){
            return;
        }
       setTasks(prevState =>[...prevState,newTask]); // prevTask is a placehlder for tasks array,
       // ...pre keeds the array elemts the same and ands newTask
        setNewTask("");
    }
    //delete tasl
    function deleteTask(index){
        
        const UpdateTasks = tasks.filter((task, id)=> id!==index )
        setTasks(UpdateTasks)

    }
    //moveTaskup
    function moveUp(index){
        if(index>0){
            const UpdateTasks = [...tasks];
            // use destructuring'
            const holder = UpdateTasks[index-1];
            UpdateTasks[index-1] = UpdateTasks[index];
            UpdateTasks[index] = holder;

            setTasks(UpdateTasks)
        //   [UpdateTasks[index],UpdateTasks[index-1]]=
        //    [UpdateTasks[index-1], UpdateTasks[index]];
        }

    }
    // movedown
    function movedown(index){
        
        if(index<tasks.length-1){
            const UpdateTasks = [...tasks];
            // use destructuring'
            const holder = UpdateTasks[index];
            UpdateTasks[index] = UpdateTasks[index+1];
            UpdateTasks[index+1] = holder;

            setTasks(UpdateTasks)
        //   [UpdateTasks[index],UpdateTasks[index-1]]=
        //    [UpdateTasks[index-1], UpdateTasks[index]];
        }
    }


    return(
        <div className='to-do'>
        <h1 className='f1'>Things to get Done</h1>
        <div className='tc'>
            <input 
            type='text' placeholder='Add task' 
            value={newTask}
            onChange={handleInputChange}/>

            <button className='add-button' 
            onClick={addTask}
            >
            add
            </button>

        </div>
        <ol>
        {tasks.map((task, id)=>
            <li key={id} className='flex'> 

                <span className='span-text flex'>{task}</span>

                <button className='del-but tc' 
                onClick={()=>deleteTask(id)}>
                    done
                    </button>

                    <button className='up-but' 
                onClick={()=>moveUp(id)}>
                    up
                    </button>
                    
                    <button className='down-but' 
                onClick={()=>movedown(id)}>
                    down
                    </button>
                    

            </li>
        )}
        </ol>
        </div>



    )
}

export default Dolist; 