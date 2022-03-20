
class Player {
	name;
	alive;
	defend;

	constructor(name) {
		this.name = name;
		this.health = 100;
		this.alive = true;
		this.defend = false;
	}

	attack(player, p) {
		if (this.defend) {
			alert('You cannot attack while defending yourself');
			return;
		}
		if (!player.defend) {
			player.health = player.health - 10;
			$('#'+p+'-health').text(`(${player.health}%)`);
			$('.'+p+'-health').css({width: player.health+'%'});
			if (player.health <= 0) {
				player.alive = false;
				$('.game-status').text(this.name + ' Wins!');
				$('.win-img').show();
				$('.buttons').remove();
			}
		} else {
			alert(player.name + ' is defending');
		}
	}


}

$(function() {
	$('.buttons').hide();
	$('.game-status').on('click', function() {
		$('.buttons').fadeIn(500);
		$(this).text('FIGHTING');
	});
})

const p1 = new Player('Megatron');
const p2 = new Player('Optimus Prime')

function attackPlayer(player) {
	if (player == 'p2') {
		p1.attack(p2, player);
	}
	if (player == 'p1') {
		p2.attack(p1, player);
	}
}

function defend(player) {
	if (player == 'p1') {
		p1.defend = !p1.defend;
		if (p1.defend) {
			$('.'+player+'-btn .defend-btn button').addClass('btn-info').removeClass('btn-outline-info');
		} else {
			$('.'+player+'-btn .defend-btn button').removeClass('btn-info').addClass('btn-outline-info');
		}
	}
	if (player == 'p2') {
		p2.defend = !p2.defend;
		if (p2.defend) {
			$('.'+player+'-btn .defend-btn button').addClass('btn-info').removeClass('btn-outline-info');
		} else {
			$('.'+player+'-btn .defend-btn button').removeClass('btn-info').addClass('btn-outline-info');
		}
	}
}











