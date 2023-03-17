let currentMenuItem
function menuSelected(num_li)
{
    let selected
    if (currentMenuItem == null){
        selected = document.getElementById(num_li);
        selected.classList.add('menu-sel');
        currentMenuItem = num_li
        return
    }
    let prev = document.getElementById(currentMenuItem);
    prev.classList.remove('menu-sel')
    selected = document.getElementById(num_li);
    selected.classList.add('menu-sel');
    currentMenuItem = num_li
    
}

menuSelected('li1')