import Exponent from 'exponent';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView
} = ReactNative;

var BGWASH = 'rgba(255,255,255,0.8)';

var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'http://picoshell.com';

class WebViewExample extends React.Component {
  state = {
    url: DEFAULT_URL,
    status: 'No Page Loaded',
    backButtonEnabled: false,
    forwardButtonEnabled: false,
    loading: true,
    scalesPageToFit: true,
  };

  render() {
    return (
      <View style={[styles.container]}>
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
        <TouchableOpacity style={styles.goBack}>
          <Text style={{textAlign: 'center'}}>
            Seperate Div For Rendering other Content or Leaving the WebView
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}




var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBack: {
    backgroundColor: 'rgba(255, 0, 0, .1)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: .1
  },
  webView: {
    backgroundColor: BGWASH,
    height: 350,
  },
});
Exponent.registerRootComponent(WebViewExample);
