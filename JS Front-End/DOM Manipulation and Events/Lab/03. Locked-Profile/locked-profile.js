document.addEventListener('DOMContentLoaded', solve);

function solve() {
    var flag = false;
    
    document.querySelectorAll('button').forEach((b) => {b.addEventListener('click', 
        (e) => {
           if(!e.target.disabled){
                if(!flag){
                    e.target.parentNode.querySelector('.hidden-fields.active').style.display = 'block';
                    e.target.textContent = 'Show less';
                }else{
                    e.target.textContent = 'Show more';
                    e.target.parentNode.querySelector('.hidden-fields.active').style.display = 'none';
                }
                flag = !flag;
           }
        }
    )}
)};
