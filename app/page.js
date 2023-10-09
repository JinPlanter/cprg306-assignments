import StudentInfo from './StudentInfo'
import Week2 from './week2/page';
import Week3 from './week3/page';
import Week4 from './week4/page';

export default function Page(){
  return(
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <br></br>
      <Week2 />

      <br></br>
      <Week4 />
    </main>
  );
}