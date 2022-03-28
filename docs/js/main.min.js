window.onload = function onLoad() {
  let animsize = 0;
  const bar = new ProgressBar.Circle(container, {
    color: '#cf7463',
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#cf7463', width: 10 },
    to: { color: '#cf7463', width: 10 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      let value = 23;
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "%");
      }

      animsize = value/100;
    }
  });
  bar.text.style.fontFamily = 'Roboto, sans-serif';
  bar.text.style.fontSize = '39px';
  bar.animate(animsize);
};