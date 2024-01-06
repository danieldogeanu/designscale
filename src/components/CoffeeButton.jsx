import classes from '../styles/coffeeButton.module.scss';

export default function CoffeeButton() {
  return (
    <div className={classes.coffeeButton}>
      <a href="https://www.buymeacoffee.com/danieldogeanu" target="_blank" rel="noreferrer">
        <img src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png" alt="Buy Me A Coffee" />
      </a>
      <script 
        type="text/javascript" 
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" 
        data-name="bmc-button" 
        data-slug="danieldogeanu" 
        data-color="#FFDD00" 
        data-emoji="" 
        data-font="Inter" 
        data-text="Buy Me a Coffee" 
        data-outline-color="#000000" 
        data-font-color="#000000" 
        data-coffee-color="#ffffff"
      ></script>
    </div>
  );
}
