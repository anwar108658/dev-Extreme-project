import { Toolbar, Item } from "devextreme-react/toolbar";
import { ItemClickEvent } from "devextreme/ui/toolbar";
import { useNavigate } from "react-router-dom";

const clickHandler = (e:ItemClickEvent) => {

}

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
      <Toolbar onItemClick={clickHandler}>
        <Item location="after" cssClass="sm:hidden"  widget="dxButton" options={homeOptions}/>
        <Item location="after"  widget="dxButton" options={aboutOptions} />
        <Item location="after"  widget="dxButton" options={servicesOptions} />
        <Item location="after"  widget="dxButton" options={contactOptions} />
      </Toolbar>
    </div>
  );
};

export default Navbar;

// Button Options
const homeOptions = { text: "Home" };
const aboutOptions = { text: "About" };
const servicesOptions = { text: "Services" };
const contactOptions = { text: "Contact" };
