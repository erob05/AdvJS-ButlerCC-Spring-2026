"use strict";

$(document).ready( () => {

    // Assigning ids to variables
    const name = $('#name');
    const faction = $('#faction');
    const relationship = $('#relationship');
    const alive = $('#alive');
    const backstory = $('#backstory');
    const imgURL = $('#imgURL');

    let editingId = null; // tracks which NPC is being edited

    // Load existing characters
    function loadRoster() {
        const roster    = JSON.parse(localStorage.getItem('npc_roster') || '[]');
        const container = $('#rosterCards');

        container.empty();

        if (roster.length === 0) {
            container.append('<p>No characters saved yet.</p>');
            return;
        }

        roster.forEach(npc => {
            const card = `
                <div class="card" data-id="${npc.id}">
                    ${npc.imgURL ? `<img src="${npc.imgURL}" alt="${npc.name}" width="100">` : ''}
                    <h2>${npc.name}</h2>
                    <p><b>Faction:</b> ${npc.faction || 'Unknown'}</p>
                    <p><b>Relationship:</b> ${npc.relationship}</p>
                    <p><b>Alive:</b> ${npc.alive ? 'Yes' : 'No'}</p>
                    <p><b>Backstory:</b> ${npc.backstory || 'None recorded'}</p>
                    <button class="edit-btn" data-id="${npc.id}">Edit</button>
                    <button class="delete-btn" data-id="${npc.id}">Delete</button>
                </div>
            `;
            container.append(card);
        });
    }

    // Delete button functionality
    $(document).on('click', '.delete-btn', function() {
        const id = $(this).attr('data-id');
        let roster = JSON.parse(localStorage.getItem('npc_roster') || '[]');
        roster = roster.filter(npc => npc.id !== id);
        localStorage.setItem('npc_roster', JSON.stringify(roster));
        loadRoster();
    });

    // Edit button - populate the form with existing values
    $(document).on('click', '.edit-btn', function() {
        const id     = $(this).attr('data-id');
        const roster = JSON.parse(localStorage.getItem('npc_roster') || '[]');
        const npc    = roster.find(n => n.id === id);
        if (!npc) return;

        name.val(npc.name);
        faction.val(npc.faction);
        relationship.val(npc.relationship);
        alive.prop('checked', npc.alive);
        backstory.val(npc.backstory);
        imgURL.val(npc.imgURL);

        editingId = id; // remember which NPC we're editing
        $('button[type="submit"]').text('Update Character');
    });

    // When submit is clicked...
    $('#npcForm').on('submit', function(e) {
        e.preventDefault();

    // Transferring values to an NPC object
        const npc = {
            id: editingId || Date.now().toString(),
            name: name.val().trim(),
            faction: faction.val().trim(),
            relationship: relationship.val(),
            alive: alive.is(':checked'),
            backstory: backstory.val().trim(),
            imgURL: imgURL.val().trim(),
        };

        // Load existing roster, push new entry, save back
        let roster = JSON.parse(localStorage.getItem('npc_roster') || '[]');

        if (editingId) {
            // Replace the existing entry
            roster = roster.map(n => n.id === editingId ? npc : n);
            editingId = null;
            $('button[type="submit"]').text('Save Character');
        } else {
            roster.push(npc);
        }

        localStorage.setItem('npc_roster', JSON.stringify(roster));
        alert(`"${npc.name}" saved!`);
        this.reset();
        loadRoster();
    });

    loadRoster(); // Load on page load
});