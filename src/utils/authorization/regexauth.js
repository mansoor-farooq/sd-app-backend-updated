const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
const nameRegex = /^[a-zA-Z]+$/;
const mobileRegex = /^03[0-9]{9}$/; // Pakistani mobile number (11 digits)
const longitudeRegex = /^-?((1[0-7]\d)|([1-9]?\d))(\.\d+)?|180(\.0+)?$/;
const latitudeRegex = /^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/; // 3 or more alphanumeric characters, underscores, dots, or hyphens
const addressRegex = /^[a-zA-Z0-9\s,.'\-#\/]{5,100}$/;
const website = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w.-]*)*\/?$/; // Basic URL validation
const dateRegex = /^\d{4}[-\/](0?[1-9]|1[0-2])[-\/](0?[1-9]|[12][0-9]|3[01])$/; // YYYY-MM-DD or YYYY/MM/DD format
const dateTimeRegex = /^\d{4}[-\/](0?[1-9]|1[0-2])[-\/](0?[1-9]|[12][0-9]|3[01])T(0?[0-9]|1[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/; // YYYY-MM-DDTHH:mm:ss format
const timeRegex = /^(0?[0-9]|1[0-9]|2[0-3]):([0-5]?[0-9])$/; // HH:mm format
const zipCodeRegex = /^\d{5}(-\d{4})?$/; // US ZIP code format (5 digits or 5+4 digits)
const ipAddressRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; // IPv4 address format   
const hexColorRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/; // Hex color code format (3 or 6 hex digits, with optional #)
const hexCodeRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/; // Hexadecimal code format (3 or 6 hex digits, with optional #)
const currencyRegex = /^\$?(\d{1,3}(,\d{3})*|\d+)(\.\d{2})?$/; // Currency format (e.g., $1,234.56 or 1234.56)
const alphanumericRegex = /^[a-zA-Z0-9]+$/; // Alphanumeric characters only
const alphanumericWithSpacesRegex = /^[a-zA-Z0-9\s]+$/; // Alphanumeric characters and spaces only
const alphanumericWithSpecialCharsRegex = /^[a-zA-Z0-9\s!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|-]+$/; // Alphanumeric characters, spaces, and some special characters
const fullnameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
const quantityRegex = /^[1-9][0-9]*$/;
const descriptionRegex = /^[a-zA-Z0-9\s.,'"\-!?()@#$%&*/\\\n]{10,1000}$/;
const skuRegex = /^[a-zA-Z0-9_-]{3,30}$/;
const unitRegex = /^[a-zA-Z]{1,10}$/;
const purchasePriceRegex = /^\d+(\.\d{1,2})?$/;
const sellingPriceRegex = /^\d+(\.\d{1,2})?$/;
const shortNameRegex = /^[A-Za-z ]{2,30}$/;




exports.shortNameRegex = shortNameRegex;
exports.skuRegex = skuRegex;
exports.unitRegex = unitRegex;
exports.purchasePriceRegex = purchasePriceRegex;
exports.sellingPriceRegex = sellingPriceRegex;
exports.descriptionRegex = descriptionRegex;
exports.quantityRegex = quantityRegex;
exports.longitudeRegex = longitudeRegex;
exports.latitudeRegex = latitudeRegex;
exports.fullnameRegex = fullnameRegex;
exports.nameRegex = nameRegex;
exports.usernameRegex = usernameRegex;
exports.addressRegex = addressRegex;
exports.websitesRegex = website;    
exports.dateRegex = dateRegex;
exports.dateTimeRegex = dateTimeRegex;
exports.timeRegex = timeRegex;
exports.zipCodeRegex = zipCodeRegex;
exports.ipAddressRegex = ipAddressRegex;
exports.hexColorRegex = hexColorRegex;
exports.hexCodeRegex = hexCodeRegex;
exports.currencyRegex = currencyRegex;
exports.alphanumericRegex = alphanumericRegex;
exports.alphanumericWithSpacesRegex = alphanumericWithSpacesRegex;
exports.alphanumericWithSpecialCharsRegex = alphanumericWithSpecialCharsRegex;
exports.emailRegex = emailRegex;
exports.passwordRegex = passwordRegex;
exports.mobileRegex = mobileRegex;



