import { fromEvent, Observable, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

interface IOptions {
  name?: string;
  html_url?: string;
  stargazers_count?: number;
}

const el: HTMLInputElement = document.querySelector('.live-search') as HTMLInputElement;

const sequence$: Observable<Object[]> = fromEvent(el, 'input').pipe(
  debounceTime(200),
  map((e: Event) => (e.target as HTMLInputElement).value),
  distinctUntilChanged(),
  switchMap((value: string) => search(value).pipe(
    catchError(() => {
      return of([{}]);
    })))
);

const div: HTMLElement = document.getElementById('list');

sequence$.subscribe((ev: Object[]) => {
  const ul: HTMLUListElement = document.createElement('ul');
  div.innerHTML = '';
  div.appendChild(ul);

  console.log(ev, 'type ==> ', typeof ev);

  for (let i: number = 0; i < ev.length; i++) {
    const li: HTMLLIElement = document.createElement('li');
    const elem: IOptions = ev[i];
    li.innerHTML = `<a href="${elem.html_url}" target="_blank">
    ${elem.name} with (${elem.stargazers_count} star(s))</a>`;
    ul.appendChild(li);
  }
}, () => {}, () => {
  console.log('completed');
});

function search(term: string): Observable<Object[]> {
  if (term === '') {
    return of([{}]);
  }

  return ajax(`https://api.github.com/search/repositories?q=${term}`).pipe(
      // tslint:disable-next-line:no-any
      map((r: any) => r.response.items)
    );
}
