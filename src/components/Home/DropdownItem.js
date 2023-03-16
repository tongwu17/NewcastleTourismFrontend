/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-16 12:51:46
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-16 18:39:37
 * @Description: The every place item of dropdown menu.
 */

function DropdownItem(props) {
  return (

    <div className="dropdown-item">
      <div className="dropdown-item-left">
        <p className="dropdown-item-name">{props.name}</p>
        <p className="dropdown-item-type">{props.type}</p>
      </div>
      <div className="dropdown-item-right">
        <div className="dropdown-item-distance">
          <span>{props.distance} mile</span>
        </div>
      </div>
    </div>
  );
}

export default DropdownItem;