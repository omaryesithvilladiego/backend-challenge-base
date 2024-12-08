    <h1>Quickbet Movies - Desarrollador Fullstack</h1>

    <h2>Descripción del Proyecto</h2>
    <ul>
        <li><strong>Frontend</strong>: Desarrollado en <strong>Next.js</strong> con <strong>TypeScript</strong> basado en un diseño proporcionado en <strong>Figma</strong>.</li>
        <li><strong>Backend</strong>: Desarrollado con <strong>Node.js</strong> y <strong>Express</strong>, que proporciona APIs para la autenticación de usuarios y la consulta de películas utilizando datos de <strong>The Movie Database (TMDB)</strong>.</li>
    </ul>

    <hr>

    <h2>Configuración Inicial</h2>

    <h3>1. Clona el Repositorio</h3>
    <p>Comienza por clonar el repositorio en tu máquina local usando el siguiente comando:</p>
    <pre>
git clone &lt;URL_DEL_REPOSITORIO&gt;
cd backend-challenge-base
    </pre>

    <h3>2. Crea el Archivo de Configuración</h3>
    <p>Dentro del directorio principal del proyecto, renombra el archivo <code>.env.example</code> a <code>.env</code> para que contenga las configuraciones de entorno necesarias para ejecutar el proyecto.</p>

    <h3>3. Configura las Variables de Entorno</h3>
    <p>Abre el archivo <code>.env</code> en tu editor de texto preferido y configura las siguientes variables:</p>
    <pre>
APP_PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=0898
DB_NAME=movies
JWT_SECRET=loquemioclarose
    </pre>
    <p><strong>Descripción de las Variables:</strong></p>
    <ul>
        <li><strong>APP_PORT</strong>: El puerto en el que se ejecutará la API del backend (default: 3001).</li>
        <li><strong>DB_HOST</strong>: La dirección del servidor de la base de datos (default: localhost).</li>
        <li><strong>DB_PORT</strong>: El puerto en el que la base de datos escucha (default: 5432).</li>
        <li><strong>DB_USERNAME</strong>: El nombre de usuario para acceder a la base de datos (default: postgres).</li>
        <li><strong>DB_PASSWORD</strong>: La contraseña asociada con el nombre de usuario de la base de datos (default: 0898).</li>
        <li><strong>DB_NAME</strong>: El nombre de la base de datos utilizada por la aplicación (default: movies).</li>
        <li><strong>JWT_SECRET</strong>: La clave secreta utilizada para firmar y verificar los tokens JWT, que se utiliza en la autenticación.</li>
    </ul>

    <h3>4. Configuración de la Base de Datos</h3>
    <p>Asegúrate de tener PostgreSQL instalado en tu máquina y de crear una base de datos con el nombre especificado en las variables de entorno (movies). Si aún no tienes PostgreSQL instalado, puedes descargarlo e instalarlo desde su página oficial.</p>
    <p>Para crear la base de datos, abre una terminal y ejecuta los siguientes comandos (asegurándote de estar en el entorno de PostgreSQL):</p>
    <pre>
psql -U postgres
CREATE DATABASE movies;
    </pre>

    <h3>5. Instalación de Dependencias</h3>
    <p>Una vez que hayas configurado las variables de entorno, navega hasta la carpeta raíz del proyecto (si no lo has hecho ya) y ejecuta el siguiente comando para instalar todas las dependencias necesarias:</p>
    <pre>
npm install
    </pre>

    <h3>6. Ejecuta la Aplicación</h3>
    <p>Para iniciar el servidor de desarrollo, utiliza el siguiente comando:</p>
    <pre>
npm run start:dev
    </pre>
    <p>Este comando iniciará el servidor en el puerto 3001 o el que hayas configurado en la variable <code>APP_PORT</code> de las variables de entorno.</p>

    <h3>8. Accede a la API</h3>
    <p>Una vez que el servidor esté en ejecución, podrás acceder a la API a través de <a href="http://localhost:3001/api" target="_blank">http://localhost:3001/api</a> en tu navegador.</p>

    <h3>9. Prueba los Endpoints de la API</h3>

    <h4>Endpoint para Registro de Usuario (Sign Up)</h4>
    <p><strong>POST /users/signUp</strong></p>
    <p>Body:</p>
    <pre>
{
  "email": "user@example.com",
  "password": "password123"
}
    </pre>

    <h4>Endpoint para Iniciar Sesión (Login)</h4>
    <p><strong>POST /users/login</strong></p>
    <p>Body:</p>
    <pre>
{
  "email": "user@example.com",
  "password": "password123"
}
    </pre>
    <p>Si el login es exitoso, el servidor retornará un token JWT.</p>

    <h4>Endpoint para Filtrar Películas</h4>
    <p><strong>GET /movies</strong></p>
    <p>Parámetros:</p>
    <ul>
        <li><strong>genres</strong>: Géneros de las películas (separados por coma). Utilizar el id del género para el filtro</li>
        <li><strong>popularity</strong>: Valor booleano para indicar si se desea filtrar por popularidad.</li>
        <li><strong>page</strong>: Número de página para paginar los resultados.</li>
    </ul>
    <p>Ejemplo de uso:</p>
    <pre>
http://localhost:3001/movies?genres=action,comedy&popularity=true&page=1
    </pre>

    <h4>Endpoint para Buscar Película por Nombre</h4>
    <p><strong>GET /movies/{name}</strong></p>
    <p>Parámetros:</p>
    <ul>
        <li><strong>name</strong>: Nombre de la película a buscar.</li>
    </ul>
