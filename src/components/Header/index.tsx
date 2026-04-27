import TopBar from '../TopBar';
import MainHeader from '../MainHeader';
import './index.scss';

export default function Header() {
    return (
        <header aria-label="Cabeçalho da página">
            <TopBar />
            <div className='line'></div>
            <MainHeader />
        </header>
    )
}