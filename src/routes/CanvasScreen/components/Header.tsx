import {useNavigate} from 'react-router-dom';
import FullscreenButton from '../../../components/FullscreenButton';

function Header() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-between p-2">
      <md-icon-button onClick={handleBackClick}>
        <md-icon class="text-xl font-bold">arrow_back</md-icon>
      </md-icon-button>
      <h1 className="font-salsa text-xl text-on-surface">Code canvas</h1>
      <FullscreenButton variant="short" />
    </div>
  );
}

export default Header;
