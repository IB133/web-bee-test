let currentMenuItem;
function menuSelected(item)
{
    let selected;
    if (currentMenuItem == null){
        item.classList.add('menu-selected');
        currentMenuItem = item;
        return
    }
    let prev = currentMenuItem;
    prev.classList.remove('menu-selected');
    selected = item;
    selected.classList.add('menu-selected');
    currentMenuItem = item;
}