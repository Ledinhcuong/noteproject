<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
<TouchableOpacity
  onPress={() => this.props.navigation.navigate('Note')}>
  <Image source={require ('./assets/noteicon.png')} />
</TouchableOpacity>

<TouchableOpacity
  onPress={() => this.props.navigation.navigate('Todo')}>
  <Image source={require ('./assets/todoicon.png')} />
</TouchableOpacity>

</View>

<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>

<TouchableOpacity>
  <Image source={require ('./assets/calendaricon.png')} />
</TouchableOpacity>

<TouchableOpacity>
  <Image source={require ('./assets/trashicon.png')} />
</TouchableOpacity>

</View>