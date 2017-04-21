/*
* Description: The template that giverns how an individual flight is rendered
* Parameters: a hash that represents the data that the flight contains
* Return: The html to be appended to the page
*/
var flightCardTemplate=_.template(`
	<div class="flightCard">
		<div class="card-top">
			<div class="ele flight-airline">
				<%= airline %>
			</div>
            <div class="ele flight-number">
				<%= flightNumber %>
			</div>
		</div>
		<div class="card-row">
			<div class="ele">
				Adults: <%= adults %>
			</div>
			<div class="ele">
				Children: <%= children %>
			</div>
		</div>
		<div class="card-row">
            <div class="ele">
                <div class="ele">
                    Departing:
                </div>
                <div class="ele flight-departure">
                    <%= departingTime %>
                </div>
            </div>
			
            <div class="ele flight-cost">
				<%= cost %>
			</div>
            
		</div>
        <div class="card-row">
            <div class="ele">
                <div class="ele">
                    Arrival:
                </div>
                <div class="ele flight-departure">
                    <%= returnTime %>
                </div>
            </div>
            <div class="ele">
                Points: <%= points %>
			</div>
        </div>
		<div class="card-bottom">
			<div class="ele">
				From <%= departingLoc %> to <%= arrivalLoc %>
			</div>
            <div class="ele">
				Airports: <%= airports %>
			</div>
			<button class="ui mini dense compact button icon booking">
				<i class="icon external square"></i>
			</button>
		</div>
	</div>
`)