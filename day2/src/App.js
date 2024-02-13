import { useEffect, useState } from 'react';
import './App.css';
import { play_gpt } from './ai';
import ROCK from './assets/rock.jpeg';
import PAPER from './assets/paper.jpeg';
import COVER from './assets/cover.jpeg';
import THREAD from './assets/thread.jpeg';
import SICSSORS from './assets/scissors.jpeg';

function App() {

  const [player_choice, set_player_choice] = useState(null);
  const [ai_choice, set_ai_choice] = useState(null);
  const [score, setScore] = useState({user:0, ai:0});
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState(null); 
  const [reveal, setReveal] = useState(false);
  const [freeze, setFreeze] = useState(false);
  const [roundWinner, setRoundWinner] = useState(null);

  const get_ai_choice = async () => {
    // let choice = await play_gpt();
    let choices = ['Rock', 'Paper', 'Sissors', 'Thread'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    await new Promise(r => setTimeout(r, 1000)); 
    if(choice.includes('Rock'))  choice = 'Rock';
    if(choice.includes('Paper')) choice = 'Paper';
    if(choice.includes('Sissors')) choice = 'Sissors';
    if(choice.includes('Thread')) choice = 'Thread';
    setReveal(false);
    set_ai_choice(choice);
  }

  const rafree = (player_choice, ai_choice) => {
    if (player_choice === ai_choice) {
      setScore({user: score.user+1, ai: score.ai+1});
      setRoundWinner('Draw');
    } else if ((player_choice === 'Rock' && ai_choice === 'Sissors' ) ||
      (player_choice === 'Paper' && ai_choice === 'Rock') ||
      (player_choice === 'Sissors' && (ai_choice === 'Paper' || ai_choice === 'Thread')) || 
      (player_choice === 'Thread' && (ai_choice === 'Rock'  || ai_choice==='Paper'))
      ) {
      setScore({user: score.user+1, ai: score.ai});
      setRoundWinner('You');
    } else {
      setScore({user: score.user, ai: score.ai+1});
      setRoundWinner('Ai');
    }
  }

  const on_round_start = async () => {
    set_player_choice(null);
    set_ai_choice(null);
    setRoundWinner(null);
    await get_ai_choice();
  }

  const on_round_end = (player_choice_cur) => {
    setReveal(true);
    set_player_choice(player_choice_cur);
    rafree(player_choice_cur, ai_choice);
    if(round < 10) {
      setFreeze(true);
      setTimeout(() => {
        setRound(round+1);
        on_round_start();
        setFreeze(false);
      }, 2000);
    } else {
      setReveal(false);
      set_ai_choice(null);
      set_player_choice(null);
      setScore({user:0, ai:0});
      setRound(0);
      if(score.user > score.ai) {
        setWinner('You');
      }else{
        setWinner('Ai');
      }
      setFreeze(true);
      setTimeout(() => {
        on_round_start();
        setFreeze(false);
        setWinner(null);
      }, 2000);
    }
  }

  useEffect(() => {
    on_round_start();
  }, []);
  
  return (
    <div className='container'>
      <div className='player'>
        <div className={'option' + (player_choice === 'Rock' ? ' selected' : '') + (ai_choice == null || freeze ? ' disabled' : '')} onClick={()=>on_round_end("Rock")} style={{backgroundImage: `url(${ROCK})`, backgroundSize: 'contain'}}><div>Rock</div></div>
        <div className={'option' + (player_choice === 'Paper' ? ' selected' : '')+ (ai_choice == null || freeze ? ' disabled' : '')} onClick={()=>on_round_end("Paper")} style={{backgroundImage: `url(${PAPER})`, backgroundSize: 'contain'}}><div>Paper</div></div>
        <div className={'option' + (player_choice === 'Sissors' ? ' selected' : '')+ (ai_choice == null || freeze ? ' disabled' : '')} onClick={()=>on_round_end("Sissors")} style={{backgroundImage: `url(${SICSSORS})`, backgroundSize: 'contain'}}><div>Scissors</div></div>
        <div className={'option' + (player_choice === 'Thread' ? ' selected' : '')+ (ai_choice == null || freeze ? ' disabled' : '')} onClick={()=>on_round_end("Thread")} style={{backgroundImage: `url(${THREAD})`, backgroundSize: 'contain'}}><div>Thread</div></div>
      </div>
      <div className='score' style={{backgroundColor: roundWinner ? ((roundWinner === 'You') ? '#065535' : ((roundWinner === 'Ai') ? '#FF7373': '#00FF00')) : ''}}>{winner ? (winner + " Wins") : (round+" | "+score.user + ' - ' + score.ai)}</div>
      <div className='ai player' style={{backgroundImage: `url(${reveal ? (ai_choice === 'Rock' ? ROCK : (ai_choice === 'Paper' ? PAPER : (ai_choice === 'Sissors' ? SICSSORS :(ai_choice === 'Thread' ? THREAD : COVER) ))) : COVER})`, backgroundSize: 'contain', backgroundRepeat: 'round'}}></div>
    </div>
  );
}

export default App;
