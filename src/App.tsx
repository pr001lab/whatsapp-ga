import './App.css';
import AppHeader from './components/AppHeader/AppHeader.tsx';
import Main from './components/common/Main/Main.tsx';
import Chats from './components/Chats/Chats.tsx';
import Messages from './components/Messages/Messages.tsx';
import Division from './components/common/Division/Division.tsx';
import Heading from './components/common/Heading/Heading.tsx';

function App() {
  return (
    <Division className='app'>
      <AppHeader />
      <Main>
        <Heading level={'h1'} className={'visually-hidden'}>
          WhatsApp
        </Heading>
        <Chats />
        <Messages />
      </Main>
    </Division>
  );
}

export default App;
