function Header() {
  return (
    <div className="flex items-center justify-between p-2">
      <md-icon-button>
        <md-icon>arrow_back</md-icon>
      </md-icon-button>
      <h1 className="font-salsa text-xl text-on-surface">Code canvas</h1>
      <md-icon-button>
        <md-icon>fullscreen</md-icon>
      </md-icon-button>
    </div>
  );
}

export default Header;
