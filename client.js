RegisterCommand('savepos', () => {
    SendNuiMessage(JSON.stringify(GetEntityCoords(GetPlayerPed(-1))));
});