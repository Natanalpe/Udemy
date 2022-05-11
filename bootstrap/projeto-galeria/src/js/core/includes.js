import $ from 'jquery'

function loadIncludes(parent) {
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function (i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)

                // removendo pra ela nçao ser interpretada mais
                // de uma vez
                $(e).removeAttr('wm-include')

                loadIncludes(e)
            }
        })
    })
}

loadIncludes()