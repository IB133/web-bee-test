let currentMenuItem
function menuSelected(item)
{
    let selected
    if (currentMenuItem == null){
        item.classList.add('menu-sel');
        currentMenuItem = item
        return
    }
    let prev = currentMenuItem;
    prev.classList.remove('menu-sel')
    selected = item
    selected.classList.add('menu-sel');
    currentMenuItem = item
    
}