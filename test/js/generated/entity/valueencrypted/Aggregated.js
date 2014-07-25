"use strict";

goog.provide('tutao.entity.valueencrypted.Aggregated');

/**
 * @constructor
 * @param {Object} parent The parent entity of this aggregate.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.valueencrypted.Aggregated = function(parent, data) {
  if (data) {
    this.__id = data._id;
    this._bool = data.bool;
    this._bytes = data.bytes;
    this._date = data.date;
    this._number = data.number;
    this._string = data.string;
  } else {
    this.__id = tutao.entity.EntityHelper.generateAggregateId();
    this._bool = null;
    this._bytes = null;
    this._date = null;
    this._number = null;
    this._string = null;
  };
  this._parent = parent;
  this.prototype = tutao.entity.valueencrypted.Aggregated.prototype;
};

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.valueencrypted.Aggregated.prototype.toJsonData = function() {
  return {
    _id: this.__id, 
    bool: this._bool, 
    bytes: this._bytes, 
    date: this._date, 
    number: this._number, 
    string: this._string
  };
};

/**
 * The id of the Aggregated type.
 */
tutao.entity.valueencrypted.Aggregated.prototype.TYPE_ID = 37;

/**
 * The id of the bool attribute.
 */
tutao.entity.valueencrypted.Aggregated.prototype.BOOL_ATTRIBUTE_ID = 43;

/**
 * The id of the bytes attribute.
 */
tutao.entity.valueencrypted.Aggregated.prototype.BYTES_ATTRIBUTE_ID = 39;

/**
 * The id of the date attribute.
 */
tutao.entity.valueencrypted.Aggregated.prototype.DATE_ATTRIBUTE_ID = 42;

/**
 * The id of the number attribute.
 */
tutao.entity.valueencrypted.Aggregated.prototype.NUMBER_ATTRIBUTE_ID = 41;

/**
 * The id of the string attribute.
 */
tutao.entity.valueencrypted.Aggregated.prototype.STRING_ATTRIBUTE_ID = 40;

/**
 * Sets the id of this Aggregated.
 * @param {string} id The id of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setId = function(id) {
  this.__id = id;
  return this;
};

/**
 * Provides the id of this Aggregated.
 * @return {string} The id of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getId = function() {
  return this.__id;
};

/**
 * Sets the bool of this Aggregated.
 * @param {boolean} bool The bool of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setBool = function(bool) {
  var dataToEncrypt = (bool) ? '1' : '0';
  this._bool = tutao.locator.aesCrypter.encryptUtf8(this._parent._entityHelper.getSessionKey(), dataToEncrypt);
  return this;
};

/**
 * Provides the bool of this Aggregated.
 * @return {boolean} The bool of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getBool = function() {
  if (this._bool == "") {
    return false;
  }
  var value = tutao.locator.aesCrypter.decryptUtf8(this._parent._entityHelper.getSessionKey(), this._bool);
  if (value != '0' && value != '1') {
    throw new tutao.InvalidDataError('invalid boolean data: ' + value);
  }
  return value == '1';
};

/**
 * Sets the bytes of this Aggregated.
 * @param {string} bytes The bytes of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setBytes = function(bytes) {
  var dataToEncrypt = bytes;
  this._bytes = tutao.locator.aesCrypter.encryptBytes(this._parent._entityHelper.getSessionKey(), dataToEncrypt);
  return this;
};

/**
 * Provides the bytes of this Aggregated.
 * @return {string} The bytes of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getBytes = function() {
  if (this._bytes == "") {
    return "";
  }
  var value = tutao.locator.aesCrypter.decryptBytes(this._parent._entityHelper.getSessionKey(), this._bytes);
  return value;
};

/**
 * Sets the date of this Aggregated.
 * @param {Date} date The date of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setDate = function(date) {
  var dataToEncrypt = String(date.getTime());
  this._date = tutao.locator.aesCrypter.encryptUtf8(this._parent._entityHelper.getSessionKey(), dataToEncrypt);
  return this;
};

/**
 * Provides the date of this Aggregated.
 * @return {Date} The date of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getDate = function() {
  if (this._date == "") {
    return new Date(0);
  }
  var value = tutao.locator.aesCrypter.decryptUtf8(this._parent._entityHelper.getSessionKey(), this._date);
  if (isNaN(value)) {
    throw new tutao.entity.tutao.InvalidDataError('invalid time data: ' + value);
  }
  return new Date(Number(value));
};

/**
 * Sets the number of this Aggregated.
 * @param {string} number The number of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setNumber = function(number) {
  var dataToEncrypt = number;
  this._number = tutao.locator.aesCrypter.encryptUtf8(this._parent._entityHelper.getSessionKey(), dataToEncrypt);
  return this;
};

/**
 * Provides the number of this Aggregated.
 * @return {string} The number of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getNumber = function() {
  if (this._number == "") {
    return "0";
  }
  var value = tutao.locator.aesCrypter.decryptUtf8(this._parent._entityHelper.getSessionKey(), this._number);
  return value;
};

/**
 * Sets the string of this Aggregated.
 * @param {string} string The string of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.setString = function(string) {
  var dataToEncrypt = string;
  this._string = tutao.locator.aesCrypter.encryptUtf8(this._parent._entityHelper.getSessionKey(), dataToEncrypt);
  return this;
};

/**
 * Provides the string of this Aggregated.
 * @return {string} The string of this Aggregated.
 */
tutao.entity.valueencrypted.Aggregated.prototype.getString = function() {
  if (this._string == "") {
    return "";
  }
  var value = tutao.locator.aesCrypter.decryptUtf8(this._parent._entityHelper.getSessionKey(), this._string);
  return value;
};
