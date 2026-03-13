const sessions = [
  {
    number: 1,
    date: '11-03-2026',
    recording: 'https://youtu.be/dRgj4VArtB4',
    presentation: 'https://drive.google.com/file/d/1LaQJ9IwZWkzfxZuUURgqUb3dOwNN4SeI/view?usp=sharing',
    resources: [
      {
        title: 'Roadmap: desarrollo frontend',
        url: 'https://roadmap.sh/frontend'
      },
      {
        title: 'Cómo funciona internet',
        url: 'https://www.youtube.com/watch?v=T5ERzSRNaKw&pp=ygUZY29tbyBmdW5jaW9uYSBlbCBpbnRlcm5ldA%3D%3D'
      },
      {
        title: 'Curso HTML',
        url: 'https://www.youtube.com/watch?v=MJkdaVFHrto&t=57s&pp=ygUKY3Vyc28gaHRtbA%3D%3D'
      }
    ]
  },
  {
    number: 2,
    date: '05-03-2026',
    recording: 'https://youtu.be/3Ug_BR42aDc',
    presentation: 'https://www.canva.com/design/DAHC9-oX9yo/8JwvAAZfmgfXUFnqONpmWw/edit?utm_content=DAHC9-oX9yo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    resources: [
      {
        title: 'Git y GitHub desde 0',
        url: 'https://www.youtube.com/watch?v=HiXLkL42tMU&t=2s'
      },
      {
        title: 'Curso de manejo de la terminal',
        url: 'https://www.youtube.com/watch?v=3gRhwwkeiog&list=PLDbrnXa6SAzU71YLePBL_BDT4Qc5fYtRf'
      }
    ]
  },
  {
    number: 3,
    date: '26-02-2026',
    recording: 'https://youtu.be/0BzJJ6O1FN0',
    presentation: 'https://www.canva.com/design/DAHCXODtmZU/G5AFmv6egsDCOkJ3ZMXd1w/edit',
    resources: [
      {
        title: 'Cómo configurar entorno JavaScript (Node.js y Visual Studio Code)',
        url: 'https://www.youtube.com/watch?v=R3D9lAW_eho'
      },
      {
        title: 'Curso de manejo de terminal de comandos',
        url: 'https://www.youtube.com/watch?v=3gRhwwkeiog&list=PLDbrnXa6SAzU71YLePBL_BDT4Qc5fYtRf'
      },
      {
        title: 'Curso práctico de Git y GitHub',
        url: 'https://www.youtube.com/watch?v=HiXLkL42tMU'
      }
    ]
  }
];

const sessionsContainer = document.getElementById('sessions-container');

function createResourceList(resources) {
  return resources
    .map(
      (resource) => `
        <li>
          <a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.title}</a>
        </li>
      `
    )
    .join('');
}

function renderSessions() {
  sessionsContainer.innerHTML = sessions
    .map(
      (session) => `
        <article class="card session-card">
          <div class="session-top">
            <div>
              <p class="session-label">Sesión ${session.number}</p>
              <h3>Reunión del ${session.date}</h3>
            </div>
            <a class="session-link" href="${session.recording}" target="_blank" rel="noopener noreferrer">Ver grabación</a>
          </div>

          <div class="session-body">
            <div class="info-box">
              <h4>Presentación</h4>
              ${
                session.presentation
                  ? `<a href="${session.presentation}" target="_blank" rel="noopener noreferrer">Abrir presentación de la sesión</a>`
                  : '<p>Enlace pendiente de agregar.</p>'
              }
            </div>

            <div class="info-box">
              <h4>Recursos de apoyo</h4>
              <ul>
                ${createResourceList(session.resources)}
              </ul>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

renderSessions();
