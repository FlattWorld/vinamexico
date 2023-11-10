const BurgerMenu = ({
  isMenuOpen,
  clickHandler,
}: {
  isMenuOpen: boolean;
  clickHandler: Function;
}) => {
  return (
    <button onClick={() => clickHandler()} aria-label="burguer-menu">
      <div
        className={`h-1 w-6 dark:bg-vina-yellow-medium bg-vina-blue-dark transition-transform mt-1 ${
          isMenuOpen && '-rotate-45 translate-y-1'
        }`}
      ></div>
      {isMenuOpen || (
        <div className="h-1 w-6 dark:bg-vina-yellow-medium bg-vina-blue-dark mt-1"></div>
      )}
      <div
        className={`h-1 w-6 dark:bg-vina-yellow-medium bg-vina-blue-dark transition-transform mt-1 transform ${
          isMenuOpen && 'rotate-45 -translate-y-1'
        }`}
      ></div>
    </button>
  );
};
export default BurgerMenu;
