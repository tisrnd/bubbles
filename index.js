$(document).ready(function() {
  //Aliases
  var Container = PIXI.Container,
      Rectangle = PIXI.Rectangle,
      autoDetectRenderer = PIXI.autoDetectRenderer,
      loader = PIXI.loader,
      resources = PIXI.loader.resources,
      Sprite = PIXI.Sprite,
      TextureCache = PIXI.utils.TextureCache;

  //Create a Pixi stage and renderer and add the 
  //renderer.view to the DOM
  var stage = new Container(),
      renderer = autoDetectRenderer(512, 512);
  document.body.appendChild(renderer.view);

  //load an image and run the `setup` function when it's done
  loader
    .add("images/atlasData.json")
    .load(setup);

  function setup() {
    
  }
  
})

