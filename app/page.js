import Link from 'next/link';

export default function Page(){

  // 1 - 13
  // const weekDemos = [1,2,3,4,5,6,7,8,9,10,11,12,13];

  return(
    <main>
      <ul>
        <li>
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
        </li>
        <li>
          <p><Link href="/StudentInfo">Student Info</Link></p>
        </li>
        <br></br>
        <li>
          <Link href="/week2">Week 2</Link>
        </li>
        <li>
          <Link href="/week3">Week 3</Link>
        </li>
        <li>
          <Link href="/week4">Week 4</Link>
        </li>
        <li>
          <Link href="/week5">Week 5</Link>
        </li>
        <li>
          <Link href="/week6">Week 6</Link>
        </li>
        <li>
          <Link href="/weekdemo6">Week 6 Demo</Link>
        </li>
        <li>
          <Link href="/weekdemo7">Week 7 Demo</Link>
        </li>
      </ul>
    </main>
  );
}