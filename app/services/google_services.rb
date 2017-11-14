module Services
    
    class GoogleService
    
        include HTTParty
        
        def self.find_elevation()
            @access_token = ENV['API_KEY']
            headers = {
                "Authorization" => @api_key
            }
        end
    
        def get_elevation()
        
        end
    
    end
    end

