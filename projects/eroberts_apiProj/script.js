$(document).ready(()=>{
    const domain = "https://xivapi.com"
    const chocoDomain = "https://xivapi.com/Mount/25";
    const fireDomain = "https://xivapi.com/Mount/105";
    const mogDomain = "https://xivapi.com/Mount/84";


    $('#choco').click(() => {
        $('#content').removeClass("hide");
        fetch(`${chocoDomain}`).then(response => {
        return response.json()}).then(path => {
            let mtName = `You chose ${path.Name}`;
            let mtSlug = path.IconHD;
            let mtIcon = domain + mtSlug;
            let mtDes = `Description: ${path.DescriptionEnhanced}`;
            let mtExpac = path.GamePatch.Name;
            let mtExImg = path.GamePatch.Banner;
            let mtAct = path.MountAction;
            if (mtAct !== null) {
                mtAct = path.MountAction.Action0.Name;
            }
            let mtTool = path.Tooltip;

            //html
            $('#name').text(mtName);
            $('#img').attr("src", mtIcon);
            $('#des').text(mtDes);
            $('#expac').text(mtExpac);
            $('#exImg').attr("src", mtExImg);
            $('#act').text(`Mount Action: ${mtAct}`);
            $('#tool').text(`Tooltip: "${mtTool}"`);
        })
    })

    $('#fire').click(() => {
        $('#content').removeClass("hide");
        fetch(`${fireDomain}`).then(response => {
        return response.json()}).then(path => {
            let mtName = `You chose ${path.Name}`;
            let mtSlug = path.IconHD;
            let mtIcon = domain + mtSlug;
            let mtDes = `Description: ${path.DescriptionEnhanced}`;
            let mtExpac = path.GamePatch.Name;
            let mtExImg = path.GamePatch.Banner;
            let mtAct = path.MountAction;
            if (mtAct !== null) {
                mtAct = path.MountAction.Action0.Name;
            }
            let mtTool = path.Tooltip;

            //html
            $('#name').text(mtName);
            $('#img').attr("src", mtIcon);
            $('#des').text(mtDes);
            $('#expac').text(mtExpac);
            $('#exImg').attr("src", mtExImg);
            $('#act').text(`Mount Action: ${mtAct}`);
            $('#tool').text(`Tooltip: "${mtTool}"`);
        })
    })

    $('#mog').click(() => {
        $('#content').removeClass("hide");
        fetch(`${mogDomain}`).then(response => {
        return response.json()}).then(path => {
            let mtName = `You chose ${path.Name}`;
            let mtSlug = path.IconHD;
            let mtIcon = domain + mtSlug;
            let mtDes = `Description: ${path.DescriptionEnhanced}`;
            let mtExpac = path.GamePatch.Name;
            let mtExImg = path.GamePatch.Banner;
            let mtAct = path.MountAction;
            if (mtAct !== null) {
                mtAct = path.MountAction.Action0.Name;
            }
            let mtTool = path.Tooltip;

            //html
            $('#name').text(mtName);
            $('#img').attr("src", mtIcon);
            $('#des').text(mtDes);
            $('#expac').text(mtExpac);
            $('#exImg').attr("src", mtExImg);
            $('#act').text(`Mount Action: ${mtAct}`);
            $('#tool').text(`Tooltip: "${mtTool}"`);
        })
    })
})