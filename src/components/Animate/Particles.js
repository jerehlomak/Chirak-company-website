export const linkParticles = {
  // background: {
    //   color: {
    //     value: "#0d47a1",
    //   },
    // },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 70,
          duration: 0.4,
        },
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        }
      },
    },
    particles: {
      color: {
        value: "#fff",
      },
      links: {
        color: "#BF0101",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 20,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
};

export const singleParticles = {
  fpsLimit: 60,
  interactivity: {
    // detectsOn: 'canvas',
    events: {
      resize: { enable: true, mode: 'bubble' },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.5,
        size: 3,
      },
    },
  },
  particles: {
    color: { value: '#BF0101' },
    move: {
      bounce: false,
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false,
    },
    number: { density: { enable: true, value_area: 1000 }, value: 10 },
    opacity: { value: 0.6 },
    shape: { type: 'circle' },
    size: { random: true, value: 7 },
  },
  detectRetina: true,
};
