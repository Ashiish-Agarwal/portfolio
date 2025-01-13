import { TextScramble } from './ui/text-scramble';

export function TextScrambleCustomCharacterDuration() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-sm '>

  My email id 
      </h1>
    <TextScramble
      className='font-mono text-sm'
      duration={1.2}
      characterSet='. '
      >
      aviinashagarwal@gmail.com
    </TextScramble>
      </div>
  );
}
