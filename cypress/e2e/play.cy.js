describe('soundcloud player spec', () => {
  it('plays all songs for 60 seconds each', () => {
    cy.visit('https://soundcloud.com/nativeofva/sets/come-see-bout-a-nerd');

    // Lower the volume to avoid audio disturbance during the test
    cy.get('.volume__button').click();

    // Get the total number of tracks
    cy.get('.trackList__item')
      .its('length')
      .then((numTracks) => {
        for (let i = 0; i < numTracks; i++) {
          // Play for 60 seconds
          cy.wait(60000);

          // If it's not the last song, click "next"
          if (i < numTracks - 1) {
            cy.get('.playControls__next').click();
          }
        }
      });
  });
});
