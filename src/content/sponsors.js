const Entity = (name, photo, link) => ({
    name, link,
    photo: `/assets/images/entities/${photo}`
});

module.exports = {
    sponsors: {
        title: 'Patrocinadores',
        categories: []
    },
    partners: [
      {
        title: 'Realização',
        items: [
          Entity('Grupy Campinas', 'grupycampinas.png', 'https://www.meetup.com/GruPy-Campinas/'),
          Entity('Pyladies Campinas', 'pyladies.png', 'https://www.meetup.com/GruPy-Campinas/'),
        ]
      }
    ],
    organization: [
        Entity('FizzFuzz', 'placeholder.png', '/sponsor-test'),
    ]
}
