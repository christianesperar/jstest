var beticaHelper = (function ($) {

  function renderItems(items) {
    $.each( items, function( key, products ) {
      $( ".content" ).append( "<h2>"+key+"</h2>" );
      
      renderProducts(products);
    });
  }

  function renderProducts(products) {
    $.each( products, function( key, product ) {
      $( ".content" ).append( "<div class='product'> <div> <h3 class='product-header'>"+product.product+"</h3> </div><div class='product-content'> <p>Manufactured by "+product.manufacturer+", to be released in "+product.releaseDate+"</p></div><div class='product-price'> <span class='product-price_value'>$"+product.price+"</span> </div></div>" );
    });
  }

  function hideLoader() {
    $('.spinner').hide();  
  }

  return {
    init: function (info) {
      renderItems(info.items);
      hideLoader();
    }
  };
})(jQuery);