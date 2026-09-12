'use strict';

var activeProjectCategory = 'all';

function filterProjects() {
    var query = $('#projectSearch').val().toLowerCase().trim();
    var visibleCount = 0;

    $('.project-card').each(function() {
        var card = $(this);
        var matchesCategory = activeProjectCategory === 'all' || card.data('portfolio-tag') === activeProjectCategory;
        var matchesQuery = !query || card.text().toLowerCase().indexOf(query) !== -1;
        var isVisible = matchesCategory && matchesQuery;

        card.prop('hidden', !isVisible);
        if (isVisible) {
            visibleCount += 1;
        }
    });

    $('#projectCount').text(visibleCount);
}

$('.portfolio-menu').on('click', 'button', function() {
    $('.portfolio-menu__link').removeClass('portfolio-menu__link--active');
    $(this).addClass('portfolio-menu__link--active');
    activeProjectCategory = $(this).data('portfolio-target-tag');
    filterProjects();
});

$('#projectSearch').on('input', filterProjects);