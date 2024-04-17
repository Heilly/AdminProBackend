
const getMenuFrontEnd = (role = 'USER_ROLE') => {

    const menu = [
        {
          titulo: 'Dashboard',
          icono: 'mdi mdi-gauge',
          submenu: [
            { titulo: 'rxjs', url: 'rxjs' },
            { titulo: 'ProgressBar', url: 'progress' },
          ]
        },
    
        {
          titulo: 'Hospitales',
          icono: 'mdi mdi-hospital-building',
          submenu: [
            // { titulo: 'Usuarios', url: 'usuarios' },
            { titulo: 'Hospitales', url: 'hospitales' },
            { titulo: 'Médicos', url: 'medicos' },
          ]
        },
        {
          titulo: 'Proyectos',
          icono: 'mdi mdi-widgets',
          submenu: [
            { titulo: 'Gifs App', url: 'gifs' },
            { titulo: 'Countries', url: 'countries' },
            { titulo: 'Pipe APP', url: 'pipe' },
          ]
        },
      ];

    if ( role === 'ADMIN_ROLE' ) {
        menu[1].submenu.unshift({ titulo: 'Usuarios', url: 'usuarios' })
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}