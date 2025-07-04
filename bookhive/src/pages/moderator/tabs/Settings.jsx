import React, { useState } from 'react';
import { Settings as SettingsIcon, Users, AlertTriangle, Shield, Save, RotateCcw } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('trustscore');

  const trustScoreSettings = [
    {
      id: 'successful_exchange',
      name: 'Successful Exchange',
      currentValue: '+5',
      description: 'Points awarded for completing a book exchange successfully'
    },
    {
      id: 'late_return',
      name: 'Late Return',
      currentValue: '-3',
      description: 'Points deducted for returning a book late'
    },
    {
      id: 'positive_review',
      name: 'Positive Review',
      currentValue: '+2',
      description: 'Points awarded for receiving positive feedback'
    },
    {
      id: 'negative_review',
      name: 'Negative Review',
      currentValue: '-2',
      description: 'Points deducted for receiving negative feedback'
    },
    {
      id: 'community_participation',
      name: 'Community Participation',
      currentValue: '+1',
      description: 'Points for active participation in book circles'
    }
  ];

  const penaltySettings = [
    {
      id: 'not_returning',
      name: 'Not Returning Books',
      severity: 'high',
      trustScoreImpact: '-25',
      duration: '30 days suspension',
      description: 'User fails to return borrowed books within specified timeframe'
    },
    {
      id: 'damaging_books',
      name: 'Damaging Books',
      severity: 'medium',
      trustScoreImpact: '-15',
      duration: '14 days suspension',
      description: 'User returns books in significantly damaged condition'
    },
    {
      id: 'false_reporting',
      name: 'False Reporting',
      severity: 'medium',
      trustScoreImpact: '-10',
      duration: '7 days suspension',
      description: 'User makes false reports against other community members'
    },
    {
      id: 'inappropriate_content',
      name: 'Inappropriate Content',
      severity: 'high',
      trustScoreImpact: '-20',
      duration: '21 days suspension',
      description: 'User posts inappropriate content in book circles or reviews'
    },
    {
      id: 'spam_activity',
      name: 'Spam Activity',
      severity: 'low',
      trustScoreImpact: '-5',
      duration: '3 days warning',
      description: 'User engages in spam activities or promotional content'
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6 p-2 bg-gray-50 min-h-screen">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">TrustScore Rules</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
            </div>
            <SettingsIcon className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Penalty Types</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Active Penalties</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">23</p>
            </div>
            <Shield className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Users Affected</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
            </div>
            <Users className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('trustscore')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'trustscore'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              TrustScore Adjustments
            </button>
            <button
              onClick={() => setActiveTab('penalties')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'penalties'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Penalty Adjustments
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'trustscore' && (
            <div className="space-y-4">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">TrustScore Configuration</h3>
                <p className="text-gray-600">Adjust point values for different user actions and behaviors</p>
              </div>
              
              {trustScoreSettings.map((setting) => (
                <div key={setting.id} className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">{setting.name}</h4>
                      <p className="text-gray-600 mt-1">{setting.description}</p>
                    </div>
                    <div className="flex items-center space-x-4 ml-6">
                      <div className="text-right">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Value</label>
                        <input
                          type="text"
                          defaultValue={setting.currentValue}
                          className="w-20 px-3 py-2 border border-gray-300 rounded-md text-center font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'penalties' && (
            <div className="space-y-4">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Penalty Configuration</h3>
                <p className="text-gray-600">Configure penalties for policy violations and inappropriate behavior</p>
              </div>
              
              {penaltySettings.map((penalty) => (
                <div key={penalty.id} className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{penalty.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(penalty.severity)}`}>
                          {penalty.severity} severity
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{penalty.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">TrustScore Impact: </span>
                          <text className="font-medium text-red-600">{penalty.trustScoreImpact}</text>
                        </div>
                        <div>
                          <span className="text-gray-500">Default Duration: </span>
                          <text className="font-medium">{penalty.duration}</text>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-6">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                        Edit
                      </button>
                      <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                        Disable
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex space-x-2 justify-end">
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <RotateCcw className="w-4 h-4" />
          <span>Reset to Default</span>
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
};

export default Settings;