ServerEvents.recipes(event => {
  //event.replaceInput({ input: '' },'','')
  //event.remove({output: '',not:{mod:'kubejs'}})
  //event.remove({id: ''})
  //event.remove({input: ''})
  //event.custom({})
  //
  event.remove({ id: 'ad_astra:space_station/earth_orbit_space_station' })
  event.remove({ id: 'ad_astra:space_station/moon_orbit_space_station' })
})
