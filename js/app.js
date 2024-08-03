$(document).ready(function() {
  const $menuButton = $('#menu-button');
  const $mobileMenu = $('#mobile-menu');

  $menuButton.on('click', function() {
    const $spans = $menuButton.find('span');
    if ($mobileMenu.hasClass('hidden')) {
      $mobileMenu.removeClass('hidden');
      setTimeout(() => {
        $mobileMenu.css('maxHeight', $mobileMenu.prop('scrollHeight') + "px");
      }, 10);
    } else {
      $mobileMenu.css('maxHeight', 0);
      setTimeout(() => $mobileMenu.addClass('hidden'), 300);
    }
    $spans.eq(1).toggleClass('w-10');
    $spans.eq(0).toggleClass('translate-y-1.5 rotate-45');
    $spans.eq(1).toggleClass('-translate-y-1.5 -rotate-45');
  });

  $(document).on('click', function(event) {
    if (!$menuButton.is(event.target) && $menuButton.has(event.target).length === 0 && !$mobileMenu.is(event.target) && $mobileMenu.has(event.target).length === 0) {
      $mobileMenu.css('maxHeight', 0);
      setTimeout(() => $mobileMenu.addClass('hidden'), 300);
      const $spans = $menuButton.find('span');
      $spans.eq(1).removeClass('w-10');
      $spans.eq(0).removeClass('translate-y-1.5 rotate-45');
      $spans.eq(1).removeClass('-translate-y-1.5 -rotate-45');
    }
  });
});
