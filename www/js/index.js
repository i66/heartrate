/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('deviceready');
        var bpmMeter = $('#bpm_meter').SonicGauge({
            label   : 'BPM',
            start   : {angle: -225, num: 0},
            end     : {angle: 45, num: 220},
            markers : [
                {
                    gap: 20,
                    line: {"width": 20, "stroke": "none", "fill": "#eeeeee"},
                    text: {"space": 22, "text-anchor": "middle", "fill": "#333333", "font-size": 18}
                },{
                    gap: 10, 
                    line: {"width": 12, "stroke": "none", "fill": "#aaaaaa"},
                    text: {"space": 18, "text-anchor": "middle", "fill": "#333333", "font-size": 12}
                },{
                    gap: 5, 
                    line: {"width": 8, "stroke": "none", "fill": "#999999"}
                }
            ],
            animation_speed : 100,
            diameter: 400
        });
        var zoneMeter = $('#zone_meter').SonicGauge({
            label   : 'Zone (%)',
            start   : {angle: -225, num: 0},
            end     : {angle: 45, num: 100},
            markers : [
                {
                    gap: 10,
                    line: {"width": 20, "stroke": "none", "fill": "#eeeeee"},
                    text: {"space": 22, "text-anchor": "middle", "fill": "#333333", "font-size": 18}
                },{
                    gap: 5, 
                    line: {"width": 8, "stroke": "none", "fill": "#999999"}
                }
            ],
            animation_speed : 100,
            diameter: 400
        });
        bpmMeter.SonicGauge('val', 90);
        zoneMeter.SonicGauge('val', 90);
    },
};
