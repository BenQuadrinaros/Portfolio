public class playerC {
	private String name;
	private int maxHP;
	private int hp;
	private int att;
	private int def;
	private int gold;
	private int questMain;
	private int questPort;
	
	
	public playerC(){
		name = "0";
		maxHP = 1;
		hp = maxHP;
		att = 0;
		def = 0;
		gold = 0;
		questMain = 0;
		questPort = 0;
	}
	
	public playerC(String nam){
		name = nam;
		maxHP = 1;
		hp = maxHP;
		att = 0;
		def = 0;
		gold = 0;
		questMain = 1;
		questPort = 0;
	}
	
	public playerC(String nam, int health, int attack, int defense, int gol)
	{
		name = nam;
		maxHP = health;
		hp = health;
		att = attack;
		def = defense;
		gold = gol;
		questMain = 1;
		questPort = 0;
	}
	
	//buffs and set values
	public void giveGold(int rew) {
		gold += rew;
	}
	public void buffAtt(double buff) {
		att = (int)(att*(1+buff));
	}
	public void buffDef(double buff) {
		def = (int)(def*(1+buff));
	}
	public void buffHP(int newHP) {
		maxHP += newHP;
	}
	public int damage(int dam) {
		dam -= def;
		if(dam > 0) {
			hp -= dam;
			return dam;
		}
		hp -= 1;
		return 1;
	}
	public void setHP(int health) {
		hp = health;
	}
	public void questProgressM() {
		questMain++;
	}
	public void questProgressP() {
		questPort++;
	}
	
	//get values
	public String getName() {
		return name;
	}
	public int getHP() {
		return hp;
	}
	public int getMaxHP() {
		return maxHP;
	}
	public int getAtt() {
		return att;
	}
	public int getDef() {
		return def;
	}
	public int getGold() {
		return gold;
	}
	public int getQuestM() {
		return questMain;
	}
	public int getQuestP() {
		return questPort;
	}
	
}
