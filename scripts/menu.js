let currentMenuItem;
function menuSelected(item)
{
    let selected;
    if (currentMenuItem == null){
        item.classList.add('menu-selected');
        currentMenuItem = item;
        return
    }
    currentMenuItem.classList.remove('menu-selected');
    selected = item;
    selected.classList.add('menu-selected');
    currentMenuItem = item;
}