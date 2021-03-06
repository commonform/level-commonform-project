/* Copyright 2016 Kyle E. Mitchell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var makeProjectKey = require('../private/project-key')

module.exports = function getProject(publisher, project, edition, callback) {
  var key = makeProjectKey(publisher, project, edition)
  this.levelup.get(key, function yieldGot(error, data) {
    if (error) {
      if (error.notFound) {
        callback(null, false) }
      else {
        callback(error) } }
    else {
      var result = {
        publisher: publisher,
        project: project,
        edition: edition,
        digest: data }
      callback(null, result) } }) }
