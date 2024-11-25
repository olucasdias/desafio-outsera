export default class Utils {

  static getBaseUrl() {
    switch (__ENV.NODE_ENV) {
      case 'PRD':
        return 'https://serverest.dev';
      default:
        console.error('URL or ENV not found');
        return ''; 
    }
  }
}
